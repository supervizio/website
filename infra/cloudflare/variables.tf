variable "cloudflare_api_token" {
  description = "Cloudflare API token with DNS and Firewall edit permissions"
  type        = string
  sensitive   = true
}

variable "zone_id" {
  description = "Cloudflare Zone ID for superviz.io"
  type        = string
}

variable "domain" {
  description = "Root domain"
  type        = string
  default     = "superviz.io"
}

variable "github_pages_target" {
  description = "GitHub Pages CNAME target"
  type        = string
  default     = "supervizio.github.io"
}

variable "allowed_ips" {
  description = "List of IP addresses allowed to access the site (empty = public)"
  type        = list(string)
  default     = []
}
