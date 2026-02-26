# SSL/TLS mode: Full (GitHub Pages provides its own certificate)
resource "cloudflare_zone_setting" "ssl" {
  zone_id    = var.zone_id
  setting_id = "ssl"
  value      = "full"
}

# Always use HTTPS
resource "cloudflare_zone_setting" "always_use_https" {
  zone_id    = var.zone_id
  setting_id = "always_use_https"
  value      = "on"
}

# Minimum TLS version
resource "cloudflare_zone_setting" "min_tls" {
  zone_id    = var.zone_id
  setting_id = "min_tls_version"
  value      = "1.2"
}
