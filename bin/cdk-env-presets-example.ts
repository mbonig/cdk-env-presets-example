#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEnvPresetsExampleStack } from '../lib/cdk-env-presets-example-stack';

const app = new cdk.App();

const env_presets = app.node.tryGetContext("env_presets");
if (!env_presets){
    console.error("Please provide a context variable env_presets that points to a preset file in the ./environments directory.")
    process.exit();
}

const envPresets = require(`./environments/${env_presets}`);

new CdkEnvPresetsExampleStack(app, 'CdkEnvPresetsExampleStack', {
    envPresets
});
