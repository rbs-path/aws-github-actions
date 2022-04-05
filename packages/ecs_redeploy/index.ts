import * as core from '@actions/core';
import AwsCli from '@aws-github-actions/awscli-core';

const run = async (): Promise<void> => {
  try {
    // Inputs:
    const service = core.getInput('service ', { required: true });
    const cluster = core.getInput('cluster', { required: true });
    const Aws = await AwsCli.getOrInstall();
    await Aws.call(['ecs', 'update-service', '--force-new-deployment', '--service', service, '--cluster', cluster]);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();

export default run;
