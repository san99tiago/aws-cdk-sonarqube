#!/usr/bin/env node
// import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkSonarQube } from '../lib/cdk-stack';


const DEPLOYMENT_ENVIRONMENT = process.env.DEPLOYMENT_ENVIRONMENT ?? "dev";
const MAIN_RESOURCES_NAME = "sonarqube-ec2";


const app = new cdk.App();
const myCdkStack = new CdkSonarQube(
  app,
  MAIN_RESOURCES_NAME,
  DEPLOYMENT_ENVIRONMENT,
  MAIN_RESOURCES_NAME,
  {
    stackName: `cdk-${MAIN_RESOURCES_NAME}-${DEPLOYMENT_ENVIRONMENT}`,
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    description: `Stack with the infrastructure for ${MAIN_RESOURCES_NAME} in ${DEPLOYMENT_ENVIRONMENT} environment`
  }
);

cdk.Tags.of(myCdkStack).add('Environment', DEPLOYMENT_ENVIRONMENT);
cdk.Tags.of(myCdkStack).add('MainResourcesName', MAIN_RESOURCES_NAME);
cdk.Tags.of(myCdkStack).add('RepositoryUrl', 'https://github.com/san99tiago/aws-cdk-sonarqube-ec2')
cdk.Tags.of(myCdkStack).add('Source', 'aws-cdk-sonarqube-ec2')
cdk.Tags.of(myCdkStack).add('Owner', 'Santiago Garcia Arango');
cdk.Tags.of(myCdkStack).add('Usage', 'Example SonarQube deployment on EC2 instances');
