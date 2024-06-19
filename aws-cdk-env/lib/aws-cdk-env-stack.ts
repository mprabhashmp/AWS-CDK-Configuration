import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as <change-1> from 'aws-cdk-lib/aws-<change-1>';

export class FirstAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new <change-1>.Bucket(this, 'change-3', {
      versioned: true,
      bucketName: 'change2'
    });
  }
}
