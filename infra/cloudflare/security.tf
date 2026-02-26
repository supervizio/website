# WAF custom rule: block all traffic except allowed IPs
# Serves a branded landing page instead of Cloudflare's default block page
# Requires token permission: Zone > Zone Rulesets > Edit
# When allowed_ips is empty, this rule is not created (site is public)
resource "cloudflare_ruleset" "ip_restriction" {
  count = length(var.allowed_ips) > 0 ? 1 : 0

  zone_id = var.zone_id
  name    = "IP Restriction"
  kind    = "zone"
  phase   = "http_request_firewall_custom"

  rules = [
    {
      action = "block"
      action_parameters = {
        response = {
          status_code  = 403
          content      = file("${path.module}/block-page.html")
          content_type = "text/html"
        }
      }
      expression  = "not ip.src in {${join(" ", var.allowed_ips)}}"
      description = "Block all traffic except allowed IPs — custom landing page"
      enabled     = true
    }
  ]
}
