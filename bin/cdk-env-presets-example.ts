#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEnvPresetsExampleStack } from '../lib/cdk-env-presets-example-stack';

const app = new cdk.App();
new CdkEnvPresetsExampleStack(app, 'CdkEnvPresetsExampleStack');
