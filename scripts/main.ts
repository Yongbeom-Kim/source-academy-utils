const args = process.argv.slice(2);

const BUNDLE_FLAG = '--bundle';

if (args.includes(BUNDLE_FLAG)) {
  require('./bundle').main();
}
