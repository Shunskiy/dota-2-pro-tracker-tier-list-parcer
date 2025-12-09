function _getFlags() {
  const flags = {};
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i += 2) {
    let flag = args[i];
    const value = args[i + 1];

    if (flag && value) {
      flag = flag.slice(1);
      flags[flag] = value;
    }
  }

  return flags;
}

function _getPosFlag(flags) {
  if (flags?.pos) {
    return flags?.pos || 1;
  }
}

const parseCliArgs = (args) => {
	const flags = _getFlags();

	return {
		pos: _getPosFlag(flags)
	}
}

export { parseCliArgs };
