const REGEX = {
	USERNAME: /^[a-z0-9]+$/,
	START_WITH_NUMBER: /^[0-9]/,
	NAME: /^[a-záéíóú\s-]+$/i
};

export const validateName = name => {
	if (!REGEX.NAME.test(name)) return 'Only letters, spaces and hyphens';

	if (name.includes('  ')) return 'Double space not allowed';

	if (name.includes('--')) return 'Double hyphens not allowed';

	const nameSplitted = name.split(' ');
	for (const word of nameSplitted) {
		if (word.startsWith('-') || word.endsWith('-'))
			return 'Improperly used hyphens';
	}

	if (name.length < 2 || name.length > 30)
		return 'Required length of 2 - 30 chars';
};

export const validateUsername = username => {
	if (!REGEX.USERNAME.test(username)) return 'Lowercase and numbers only';

	if (REGEX.START_WITH_NUMBER.test(username))
		return 'It is not allowed to start with numbers';

	if (username.length < 6 || username.length > 15)
		return 'Required length of 6 - 15 chars';
};
