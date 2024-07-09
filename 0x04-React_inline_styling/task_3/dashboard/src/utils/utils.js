<<<<<<< HEAD
function getFullYear() {
	  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
	if (!isIndex) return "Holberton School main dashboard";
	return "Holberton School";
}

function getLatestNotification() {
	return `<strong>Urgent requirement</strong> - complete by EOD`;
}

// export
=======
function getFullYear() {
	  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
	if (!isIndex) return "Holberton School main dashboard";
	return "Holberton School";
}

function getLatestNotification() {
	return `<strong>Urgent requirement</strong> - complete by EOD`;
}

// export
>>>>>>> temp-branch
export { getFullYear, getFooterCopy, getLatestNotification };