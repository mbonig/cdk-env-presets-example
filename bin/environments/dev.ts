import {InstanceClass, InstanceSize} from "@aws-cdk/aws-ec2";

const config = {
    instanceClass: InstanceClass.T3,
    instanceSize: InstanceSize.MICRO
};
export default config;

