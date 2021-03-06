#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { Services } from '../lib/services';
//import { EKSPetsite } from '../lib/ekspetsite'

const stackName = "Services";
const app = new cdk.App();

const stack = new Services(app, stackName);
cdk.Tag.add(stack, 'Workshop', 'true');
