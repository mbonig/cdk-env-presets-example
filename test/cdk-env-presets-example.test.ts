import {expect as expectCDK, MatchStyle, matchTemplate} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import {InstanceClass, InstanceSize} from "@aws-cdk/aws-ec2";
import CdkEnvPresetsExample = require('../lib/cdk-env-presets-example-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkEnvPresetsExample.CdkEnvPresetsExampleStack(app, 'MyTestStack', {
        envPresets: {instanceSize: InstanceSize.MICRO, instanceClass: InstanceClass.T3}
    });
    // THEN
    expectCDK(stack).to(matchTemplate({
        "Resources": {}
    }, MatchStyle.EXACT))
});
