output "apex_record" {
  description = "Apex DNS record"
  value       = "${cloudflare_dns_record.apex.name}.${var.domain} → ${cloudflare_dns_record.apex.content}"
}

output "www_record" {
  description = "WWW DNS record"
  value       = "${cloudflare_dns_record.www.name}.${var.domain} → ${cloudflare_dns_record.www.content}"
}

output "ssl_mode" {
  description = "SSL/TLS encryption mode"
  value       = cloudflare_zone_setting.ssl.value
}

output "ip_restriction_active" {
  description = "Whether IP restriction is active"
  value       = length(var.allowed_ips) > 0 ? "ACTIVE (${length(var.allowed_ips)} IPs allowed)" : "DISABLED (site is public)"
}
