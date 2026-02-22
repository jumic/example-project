import * as cdk from 'aws-cdk-lib/core';
import type { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ExampleProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    new sqs.Queue(this, 'ExampleProjectQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
      enforceSSL: true,
    });
  }
}
