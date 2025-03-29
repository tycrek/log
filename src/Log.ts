/**
 * CLI colours. These are exported for your reference.
 */
export const CLI_COLOURS = {
	green: '\x1b[32m',
	turquoise: '\x1b[36m',
	blue: '\x1b[34m',
	grey: '\x1b[90m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	RESET: '\x1b[0m',
};

/**
 * A logging tool
 */
export default class Log {
	private prefix: string;
	private showTimestamps: boolean;
	private separator: string;
	private enabled: boolean = true;

	constructor(options: { prefix?: string, showTimestamps?: boolean, separator?: string }) {
		this.prefix = options.prefix ?? ''
		this.showTimestamps = options.showTimestamps ?? false
		this.separator = options.separator ?? ''
	}

	// deno-lint-ignore no-explicit-any
	private log(func: (...data: any[]) => void, message: string) {
		if (!this.enabled) return;

		const metadata = {
			prefix: this.prefix.length == 0 ? '' : `${this.prefix} `,
			timestamp: this.showTimestamps ? `${new Date(Date.now()).toISOString()}` : '',
			separator: this.separator.length == 0 ? ' ' : ` ${this.separator} `,
		}
		const metastring = `${CLI_COLOURS.grey}${metadata.prefix}${metadata.timestamp}${metadata.separator}${CLI_COLOURS.RESET}`;

		func(`${metastring}${message}${CLI_COLOURS.RESET}`);
	}

	setEnabled(enabled: boolean) {
		this.enabled = enabled;
	}

	/**
	 * A debug message
	 * @param message Print this to console
	 */
	debug(message: string) {
		this.log(console.log, `${CLI_COLOURS.grey}${message}`);
	}

	/**
	 * An info message
	 * @param message Print this to console
	 */
	info(message: string) {
		this.log(console.info, `${CLI_COLOURS.blue}${message}`);
	}

	/**
	 * A success message
	 * @param message Print this to console
	 */
	success(message: string) {
		this.log(console.info, `${CLI_COLOURS.green}${message}`);
	}

	/**
	 * An error message
	 * @param message Print this to console
	 */
	error(message: string) {
		this.log(console.error, `${CLI_COLOURS.red}${message}`);
	}

	/**
	 * A warning message
	 * @param message Print this to console
	 */
	warn(message: string) {
		this.log(console.warn, `${CLI_COLOURS.yellow}${message}`);
	}
}
