# Apex domain → GitHub Pages (CNAME flattened by Cloudflare)
resource "cloudflare_dns_record" "apex" {
  zone_id = var.zone_id
  name    = "@"
  type    = "CNAME"
  content = var.github_pages_target
  proxied = true
  ttl     = 1 # Auto when proxied
  comment = "GitHub Pages - apex domain (CNAME flattened)"
}

# www subdomain → GitHub Pages
resource "cloudflare_dns_record" "www" {
  zone_id = var.zone_id
  name    = "www"
  type    = "CNAME"
  content = var.github_pages_target
  proxied = true
  ttl     = 1
  comment = "GitHub Pages - www redirect"
}
