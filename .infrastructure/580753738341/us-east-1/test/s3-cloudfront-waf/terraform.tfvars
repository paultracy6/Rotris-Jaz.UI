terragrunt_source = "git::https://git.rockfin.com/terraform/aws-s3-cloudfront-waf-tf.git?ref=3.5.0"

# ---------------------------------------------------------------------------------------------------------------------
# Required variables for AWS
# ---------------------------------------------------------------------------------------------------------------------

aws_region     = "us-east-1"  # DO NOT CHANGE. CloudFront is always in us-east-1
aws_account_id = "580753738341"

# ---------------------------------------------------------------------------------------------------------------------
# Standard Module Required Variables
# ---------------------------------------------------------------------------------------------------------------------

app_id           = "211190"
application_name = "ritaui"
environment      = "test"

development_team_email        = "rickykenner@rocketmortgage.com"
infrastructure_team_email     = "rickykenner@rocketmortgage.com"
infrastructure_engineer_email = "rickykenner@rocketmortgage.com"

# ---------------------------------------------------------------------------------------------------------------------
# Infrastructure Tags
# ---------------------------------------------------------------------------------------------------------------------

app_tags = {
  hal-app-id = "13301"
}

# ---------------------------------------------------------------------------------------------------------------------
# Module Variables
# ---------------------------------------------------------------------------------------------------------------------

website_domain_name = "rita.test.closing-np.foc.zone"

create_route53_entry        = true                        # Set to 'false' to use xxx.cloudfront.net only.
hosted_zone_name            = "test.closing-np.foc.zone"   # dns zone that the 'website_domain_name' will be created in
acm_certificate_domain_name = "rita.test.closing-np.foc.zone" # Set to blank to if 'create_route53_entry' is false

# Use the following settings to use xxxx.cloudfront.net WITHOUT custom domain names and WITHOUT https:
# create_route53_entry        = false
# hosted_zone_name            = ""
# acm_certificate_domain_name = ""

http_or_https_mode     = "redirect-to-https" # For http only use "allow-all"
cloudfront_price_class = "PriceClass_100"

# DANGER! Enable the following and run a 'plan' if you want to force destroy the site.
# force_destroy_access_logs_bucket = true
# force_destroy_website            = true
# force_destroy_redirect           = true

min_ttl     = 0
max_ttl     = 60
default_ttl = 30

index_document     = "index.html"
error_document_404 = "index.html"
error_document_500 = "index.html"

error_404_response_code = 404
error_500_response_code = 500

# What are the QL IP ranges? - https://confluence.rockfin.com/pages/viewpage.action?pageId=80297564
allowed_external_ips = [
  "12.165.188.0/24",
  "162.252.136.0/21",
]

cloudfront_forward_headers = [
  "Access-Control-Request-Headers",
  "Access-Control-Request-Method",
  "Origin",
]

cors_rule = [
  {
    allowed_headers = ["*"]
    allowed_methods = ["*"]
    allowed_origins = ["https://rita.test.closing-np.foc.zone"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
]
