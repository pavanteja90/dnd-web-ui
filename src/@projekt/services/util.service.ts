
import { Injectable } from "@angular/core";
// import * as dateFns from "date-fns";
import { AbstractControl } from '@angular/forms';

/**
 * Ensures serialised dates include local timezone
 */
// Date.prototype.toJSON = function () { let that = this; return dateFns.format(that, "YYYY-MM-DDTHH:mm:ss.SSSZ"); };

@Injectable({ providedIn: 'root' })
export class UtilService {
	public static MaritalStatuses: string[] = ["Married", "Single", "Divorced", "Separated", "Widowed", "Defacto"];
	public static PersonalRelationships: string[] = ["Spouse", "Friend", "Landlord", "Relative", "Colleague"];
	public static NextOfKinRelationships: string[] = ["Husband", "Wife", "Mother", "Father", "Sister", "Brother", "Son", "Daughter", "Aunt", "Uncle", "Other"];

	public static ZeroToTens: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	public static ZeroToTwelves: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	public static OneToTens: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	public static OneToTwelves: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	public static getMimeType(filename) {
		console.warn(filename);
		if (filename.toLowerCase().indexOf('.pdf') > -1) {
			return "application/pdf";
		}
		if (filename.toLowerCase().indexOf('.jpg') > -1 || filename.toLowerCase().indexOf('.jpeg') > -1) {
			return "image/jpeg";
		}
		if (filename.toLowerCase().indexOf('.docx') > -1) {
			return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
		}
		if (filename.toLowerCase().indexOf('.doc') > -1) {
			return "application/msword";
		}
		if (filename.toLowerCase().indexOf('.png') > -1) {
			return "image/png";
		}
		return "application/octet-stream";
	}

	/** Returns today at midnight. Use indtead of standard js new Date() when validating to avoid time component interfering */
	public getMidnightDate() {
		let date = new Date();
		date.setHours(0, 0, 0, 0);
		return date;
	}

	/** Returns Jan 1 of specified year, or this year */
	public getStartOfYearDate(year?: number) {
		let date = new Date();
		if (year) {
			date = new Date(year, 0, 1);
		}
		date.setHours(0, 0, 0, 0);
		return date;
	}

	public static formatCurrency(amount, decimalCount = 2, decimal = ".", thousands = ",") {
		try {
			decimalCount = Math.abs(decimalCount);
			decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

			const negativeSign = amount < 0 ? "-" : "";

			let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
			let j = (i.length > 3) ? i.length % 3 : 0;

			return "$" + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - parseInt(i)).toFixed(decimalCount).slice(2) : "");
		} catch (e) {
			return amount;
		}
	}

	// public getDateMinusYears(years: number) {
	// 	return dateFns.subYears(this.getMidnightDate(), years);
	// }

	static isObject(item) {
		return (item && typeof item === 'object' && !Array.isArray(item));
	}

	/** Compares two objects for equality, doesnt handle arrays yet */
	public static deepEquals(a: any, b: any): boolean {
		if (UtilService.isObject(a) && UtilService.isObject(b)) {
			return Object.keys(a).length == Object.keys(b).length && Object.keys(a).some(key => b[key] != undefined && UtilService.deepEquals(b[key], a[key]));
		} else {
			return a == b;
		}
	}

	/**
	 * Deep merge two objects. https://stackoverflow.com/a/34749873
	 * @param target
	 * @param ...sources
	 */
	static deepMerge(target: any, ...sources) {
		if (!sources.length) { return target; }
		const source = sources.shift();
		if (UtilService.isObject(target) && UtilService.isObject(source)) {
			for (const key in source) {
				if (UtilService.isObject(source[key])) {
					if (!target[key]) { Object.assign(target, { [key]: {} }); }
					UtilService.deepMerge(target[key], source[key]);
				} else {
					Object.assign(target, { [key]: source[key] });
				}
			}
		}
		return UtilService.deepMerge(target, ...sources);
	}

	public static DownloadFile(data, fileType, alsoShowInBrowser) {
		let blob = new Blob([data], { type: fileType });
		// window.URL.revokeObjectURL(url);

		// IE doesn't allow using a blob object directly as link href
		// instead it is necessary to use msSaveOrOpenBlob
		if ((window as any).navigator && (window as any).navigator.msSaveOrOpenBlob) {
			(window as any).navigator.msSaveOrOpenBlob(blob);
			return;
		}

		// For other browsers:
		// Create a link pointing to the ObjectURL containing the blob.
		let url = ((window as any).URL as any).createObjectURL(blob, {});
		let link = document.createElement('a');
		link.href = url;
		link.download = "application-pack.pdf";
		link.innerHTML = 'Download File';
		if ('webkitURL' in window) {
			// Chrome allows the link to be clicked without actually adding it to the DOM.
			link.href = (window['webkitURL'] as any).createObjectURL(blob);
		} else {
			// Firefox requires the link to be added to the DOM before it can be clicked.
			link.href = ((window as any).URL as any).createObjectURL(blob);
			link.onclick = (event: any) => { document.body.removeChild(event.target); };
			link.style.display = 'none';
			document.body.appendChild(link);
		}
		link.click();
		setTimeout(() => {
			// For Firefox it is necessary to delay revoking the ObjectURL
			// window.URL.revokeObjectURL(url);
		}, 100);
		if (alsoShowInBrowser) {
			(window as any).location.href = url;
		}
	}

	public downloadBlob(blob, filename: string, alsoShowInBrowser: boolean = false) {
		// let blob = new Blob([data], { type: fileType });
		// window.URL.revokeObjectURL(url);

		// IE doesn't allow using a blob object directly as link href
		// instead it is necessary to use msSaveOrOpenBlob
		if ((window as any).navigator && (window as any).navigator.msSaveOrOpenBlob) {
			(window as any).navigator.msSaveOrOpenBlob(blob);
			return;
		}

		// For other browsers:
		// Create a link pointing to the ObjectURL containing the blob.
		let url = ((window as any).URL as any).createObjectURL(blob, {});
		let link = document.createElement('a');
		link.href = url;
		link.download = filename;
		link.innerHTML = 'Download File';
		if ('webkitURL' in window) {
			// Chrome allows the link to be clicked without actually adding it to the DOM.
			link.href = (window['webkitURL'] as any).createObjectURL(blob);
		} else {
			// Firefox requires the link to be added to the DOM before it can be clicked.
			link.href = ((window as any).URL as any).createObjectURL(blob);
			link.onclick = (event: any) => { document.body.removeChild(event.target); };
			link.style.display = 'none';
			document.body.appendChild(link);
		}
		link.click();
		setTimeout(() => {
			// For Firefox it is necessary to delay revoking the ObjectURL
			// window.URL.revokeObjectURL(url);
		}, 100);
		if (alsoShowInBrowser) {
			(window as any).location.href = url;
		}
	}
	/**
	 * Returns an array of {text,value} to use in a select list - with optional plural-aware suffix (eg. year, years)
	 * @param min
	 * @param max
	 * @param singularSuffix
	 * @param pluralSuffix
	 */
	public static GetNumericSelectOptions(min: number, max: number, singularSuffix?: string, pluralSuffix?: any) {
		let options = [];
		if (singularSuffix) {
			singularSuffix = " " + singularSuffix;
		}
		if (!pluralSuffix) {
			pluralSuffix = singularSuffix + "s";
		}
		for (let option = min; option <= max; option++) {
			options.push({ value: option, text: option + (option !== 1 ? pluralSuffix : singularSuffix) });
		}
		return options;
	}

	private static getInt(value: any) {
		try {
			let val = Number.parseInt(value);
			if (Number.isInteger(val)) {
				return val;
			}
		}
		catch (err) { }
		return 0;
	}

	public static Sum(addVals: any, subtractVals?: any): number {
		let total = 0;
		for (let c in addVals) {
			total += UtilService.getInt(addVals[c]);
		}
		for (let c in subtractVals) {
			total -= UtilService.getInt(subtractVals[c]);
		}
		return total;
	}

	public DateToString(date: Date) {
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		return (day.toString().length < 2 ? "0" : "") + day + "/" + (month.toString().length < 2 ? "0" : "") + month + "/" + year;
	}

	public static DateToFinpowerString(date: Date) {
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		return year + "-" + (month.toString().length < 2 ? "0" : "") + month + "-" + (day.toString().length < 2 ? "0" : "") + day;
	}

	public static SanitiseString(str: any, type: string) {//} numbersOnly?: boolean, allowSentences?: boolean) {
		if (!str || !(str instanceof String) || type === "email" || type === "password") {
			return str;
		}
		if (type === "number" || type === "money") {
			return str.replace(/([^.0-9])/g, '');
		}
		if (type === "text-area") {
			return str.replace(/[\/\\#+\^@~%_=`"*|<>{}]/g, '');
		}
		return str.replace(/[&\/\\#+\^()$@~%._=`";:*|!?<>{}]/g, '');
	}

	public static Titles = ["Mr", "Mrs", "Miss", "Ms"];
	public static TitlesWithDr = ["Mr", "Mrs", "Miss", "Ms", "Dr"];
	public static IdTypes = ["Driver's Licence", "Passport", "Proof of Age Card", "Birth Certificate"];
	public static AbbreviatedAUStates = ["NSW", "QLD", "VIC", "TAS", "WA", "ACT", "NT", "SA"];
	public static YesNoOptions = [{ label: "Yes", value: true }, { label: "No", value: false }];

	public static IdLookupWithoutBirthCertificate = [
		{ label: "Driver's Licence", value: "DL" },
		{ label: "Passport", value: "PP" },
		{ label: "Proof of Age Card", value: "OCRD" },
	];
	public static IdLookup = [
		...UtilService.IdLookupWithoutBirthCertificate,
		{ label: "Birth Certificate", value: "BIRTH" }
	];
	public static IdLookupLong = [
		...UtilService.IdLookupWithoutBirthCertificate,
		{ label: "Medicare", value: "MEDIC" },
		{ label: "Centrelink", value: "CEN" },
		{ label: "Debit Card", value: "EFT" },
	];
	public static TimeAtAddressOptions = [
		{ value: 3, label: "< 3 Months" }, { value: 6, label: "6 months" }, { value: 12, label: "1 year" }, { value: 18, label: "18 months" }, { value: 24, label: "2 years" }, { value: 36, label: "3 years" }, { value: 48, label: "4 years" }, { value: 60, label: "5+ years" }
	];
	/** Days of week as string array */
	public static DaysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	/** Business days of week as string array */
	public static BusinessDaysOfWeek: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

	/** Times of day between 9am and 5pm, with half hour intervals as string array */
	public static BusinessTimesHalfHour: string[] = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];

	public static EntityTypes: string[] = ["Partnership", "Company", "Trust", "Fund", "Sole Trader"];

	public static CountryStates = [{
		country: "New Zealand", states: [
			"Auckland",
			"Bay of Plenty",
			"Canterbury",
			"Chatham Islands",
			"Gisborne",
			"Hawke's Bay",
			"Manawatu-Wanganui",
			"Marlborough",
			"Nelson",
			"Northland",
			"Otago",
			"Southland",
			"Taranaki",
			"Tasman",
			"Waikato",
			"Wellington",
			"West Coast"]
	}, {
		country: "Australia", states: [
			"Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"
		]
	}, {
		country: "AU", states: [
			"Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"
		]
	}];

	public static GetAddressStates(country: string) {
		return UtilService.CountryStates.find(item => item.country === country).states;
	}

	public static NZStates = [
		"Auckland",
		"Bay of Plenty",
		"Canterbury",
		"Chatham Islands",
		"Gisborne",
		"Hawke's Bay",
		"Manawatu-Wanganui",
		"Marlborough",
		"Nelson",
		"Northland",
		"Otago",
		"Southland",
		"Taranaki",
		"Tasman",
		"Waikato",
		"Wellington",
		"West Coast"];
	public static AddressStates = ["New South Wales", "Queensland", "Victoria", "South Australia", "Tasmania", "Western Australia", "Australian Capital Territory", "Northern Territory"];
	public static AddressCountries = ["Australia", "New Zealand"];

	public static GetFullStateName(stateAbbreviation: string) {
		switch (stateAbbreviation) {
			case 'NSW': return 'New South Wales';
			case 'QLD': return 'Queensland';
			case 'VIC': return 'Victoria';
			case 'SA': return 'South Australia';
			case 'TAS': return 'Tasmania';
			case 'WA': return 'Western Australia';
			case 'ACT': return 'Australian Capital Territory';
			case 'NT': return 'Northern Territory';
		}
	}

	public static ResidentialStatuses = ["Own", "Boarding", "Renting", "Purchasing", "Living with Parents"];
	public static ResidentialStatusesWithoutParents = ["Own", "Boarding", "Renting", "Purchasing", "Living with Parents"];

	/** Times of day in 3 hr groups between 9am and 5pm as string array */
	public static BusinessTimes3hr: string[] = ["9am-12pm", "12pm-3pm", "3pm-5pm"];

	public static VehicleTypes = ["Bus", "Campervan/Motorhome", "Cars", "Conditional Registration", "Light Commercial", "Mobile Machinery", "Motorcycle", "Other", "Trailer", `Truck/Articulated Truck`];

	public static EmploymentTypes = ["Full Time", "Part Time", "Casual", "Self-employed", "Govt Benefits", "Home Duties", "Other"];
	public static getEmploymentTypesWithoutCentrelinkOrHomeDuties() {
		return ["Full Time", "Part Time", "Casual", "Self-employed", "Other"];
	}
	public static PaymentFrequencies = ["Weekly", "Fortnightly", "Monthly"];
	public static PaymentFrequenciesAnnually = ["Weekly", "Fortnightly", "Monthly", "Annually"];
	public static PaymentFrequenciesWithAnnual = ["Weekly", "Fortnightly", "Monthly", "Quarterly", "Annually"];
	public static AllFrequencies = ["Weekly", "Fortnightly", "Monthly", "Quarterly", "Bi-yearly", "Yearly"];
	public static GetRandomInt(max: number = 99999999, min = 0) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	public static GetFinancialYears(startYear: number = 2010, includeAllYearsOption: boolean = false): { text: string, value: number }[] {
		let today = new Date();
		let years = [];
		for (let year = startYear; year <= today.getFullYear(); year++) {
			years.unshift({ text: `${year}-${year + 1}`, value: year });
		}
		if (includeAllYearsOption) {
			years.unshift({ text: `All Years`, value: -1 });
		}
		return years;
	}

	// public static FormatDate(date: Date) {
	// 	return dateFns.format(date, "DD/MM/YYYY");
	// }

	public static LoanSources = [
		"Google",
		"Facebook",
		"Instagram",
		"Referred by a friend",
		"Mailbox Calendar",
		"Website",
		"Other"
	];

	public static LoanSourcesWithoutOther = [
		"Google",
		"Facebook",
		"Instagram",
		"Referred by a friend",
		"Mailbox Calendar",
		"Website"
	];

	public static LoanPurposes = [
		"Appliance Purchase",
		"Business Loans",
		"Cash-Flow Loans",
		"Education",
		"Emergency Loans",
		"Fix Your Stuff",
		"Furniture Loans",
		"Health Loans",
		"Holiday Loans",
		"Home Improvements",
		"Insurance Loans",
		"Investment Loans",
		"Medical Loans",
		"Pay Day Loans",
		"Settlement Loans",
		"Personal Loans",
		"Pet Care",
		"Rental Bond",
		"Short Term",
		"Technology Loans",
		"Travel Expense",
		"Unexpected Loans",
		"Vehicle Expense",
		"Vet Bills"];

	public static ShortLoanPurposes = [
		"Bills",

		"Education",

		"Entertainment/Special occasion",

		"Home improvements",

		"Household goods",

		"Medical/dental",

		"Rental Bond/Relocation",

		"Travel/holiday",

		"Vehicle expenses",

		"Work Expenses",

		"Other"
	];

	public static ConsolidateOptions = [
		{ value: true, label: 'Consolidate' },
		{ value: false, label: 'Dont Consolidate' }
	];

	public static getControlName(c: AbstractControl): string | null {
		if (!c.parent) {
			return null;
		}
		const formGroup = c.parent.controls;
		return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
	}

	public static getControlPath(c: AbstractControl, path: string): string | null {
		path = UtilService.getControlName(c) + path;

		if (c.parent && UtilService.getControlName(c.parent)) {
			path = "." + path;
			return UtilService.getControlPath(c.parent, path);
		} else {
			return path;
		}

	}

	public static FinancialYearOrderedMonths = [
		{ value: "07", label: "July" }, { value: "08", label: "August" }, { value: "09", label: "September" }, { value: "10", label: "October" }, { value: "11", label: "November" }, { value: "12", label: "December" }, { value: "01", label: "January" }, { value: "02", label: "February" }, { value: "03", label: "March" }, { value: "04", label: "April" }, { value: "05", label: "May" }, { value: "06", label: "June" },
	];

	public static getFinancialYearStart(financialYear) {
		return this.DateToFinpowerString(new Date(financialYear, 6, 1));
	}

	public static getFinancialYearEnd(financialYear) {
		return this.DateToFinpowerString(new Date((financialYear + 1), 5, 30));
	}
}
