import * as cdk from '@aws-cdk/core';
import {CfnOutput, StackProps} from "@aws-cdk/core";


export interface CdkEnvPresetsExampleStackProps extends StackProps{
  envPresets: any;
}
export class CdkEnvPresetsExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: CdkEnvPresetsExampleStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new CfnOutput(this,  'some-usage-of-env-presets', {
      value: props?.envPresets.instanceType
    })
  }
}
