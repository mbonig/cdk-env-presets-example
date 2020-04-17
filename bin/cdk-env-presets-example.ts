#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEnvPresetsExampleStack } from '../lib/cdk-env-presets-example-stack';

const app = new cdk.App();

const env_presets = app.node.tryGetContext("env_presets");
const envPresets = require(`./${env_presets}.json`);
new CdkEnvPresetsExampleStack(app, 'CdkEnvPresetsExampleStack', {
    envPresets
});
