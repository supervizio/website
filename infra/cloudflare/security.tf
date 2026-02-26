# IP restriction via Cloudflare Worker (free plan compatible)
# Serves a branded landing page for non-allowed IPs
# When allowed_ips is empty, the worker is not created (site is public)

resource "cloudflare_workers_script" "ip_gate" {
  count = length(var.allowed_ips) > 0 ? 1 : 0

  account_id  = var.account_id
  script_name = "supervizio-ip-gate"
  content = templatefile("${path.module}/worker-ip-gate.js", {
    allowed_ips = jsonencode(var.allowed_ips)
    block_page  = replace(file("${path.module}/block-page.html"), "`", "\\`")
  })
  compatibility_date = "2024-01-01"
}

resource "cloudflare_workers_route" "ip_gate" {
  count = length(var.allowed_ips) > 0 ? 1 : 0

  zone_id = var.zone_id
  pattern = "${var.domain}/*"
  script  = cloudflare_workers_script.ip_gate[0].script_name
}

resource "cloudflare_workers_route" "ip_gate_www" {
  count = length(var.allowed_ips) > 0 ? 1 : 0

  zone_id = var.zone_id
  pattern = "www.${var.domain}/*"
  script  = cloudflare_workers_script.ip_gate[0].script_name
}
