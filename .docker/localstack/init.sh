#!/bin/bash
set -x

S3=(
${AWS_S3_BUCKET}
)

for s3_bucket in "${S3[@]}"; do
  awslocal s3 mb s3://"${s3_bucket}"
  awslocal s3api put-bucket-acl --bucket "${s3_bucket}" --acl public-read
done

awslocal appconfig create-application \
        --name test-application-name \
        --description "Test Application Name"

awslocal appconfig create-environment \
        --application-id <APPLICATION_ID> \
        --name <ENVIRONMENT_NAME> \
        --description <ENVIRONMENT_DESCRIPTION>

awslocal appconfig create-configuration-profile \
        --application-id <APPLICATION_ID> \
        --name <CONFIGURATION_PROFILE_NAME> \
        --location-uri hosted \
        --type AWS.AppConfig.FeatureFlags

awslocal appconfig create-hosted-configuration-version \
        --application-id <APPLICATION_ID> \
        --configuration-profile-id <CONFIGURATION_PROFILE_ID> \
        --content-type "application/json" \
        --content <FEATURE_FLAG_CONFIGURATION_DATA_FILE>


set +x