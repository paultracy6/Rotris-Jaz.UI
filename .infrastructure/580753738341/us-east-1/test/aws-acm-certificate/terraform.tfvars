# terragrunt_source = "git::https://git.rockfin.com/terraform/aws-acm-certificate-tf?ref=2.0.0"
# ---------------------------------------------------------------------------------------------------------------------
# Required variables for AWS
# ---------------------------------------------------------------------------------------------------------------------

aws_region     = "us-east-1"
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
# Infrastructure Variables
# ---------------------------------------------------------------------------------------------------------------------

route53_zone = "test.closing-np.foc.zone"

certificate_domains = [
  "rita.test.closing-np.foc.zone"
]