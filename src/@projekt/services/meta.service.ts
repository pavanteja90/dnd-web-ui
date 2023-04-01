import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";
import { DOCUMENT } from '@angular/common';
import { Config } from '../models/config.model';

@Injectable({ providedIn: 'root' })
export class MetaService extends Title {
	constructor(private metaService: Meta, @Inject(DOCUMENT) doc: any, public config: Config) {
		super(doc);
	}

	/**
	 * @description This method is used to set meta data to the document
	 * @param metaData is an object containing the list of meta data items that needs a change
	 */
	setMetaData(metaData: object) {
		if (metaData) {
			this.setMetaTags(metaData);
		}
	}

	protected setMetaTags(metaData: object) {
		let keys = Object.keys(metaData);
		for (let key of keys) {
			let content = metaData[key];
			switch (key) {
				case "title":
					let title = (this.config.site.title && this.config.site.title != content) ? content + " | " + this.config.site.title: content;
					this.setTitle(title); // Set's the title for the website
					this.setTag({ property: "og:" + key, title });
					this.setTag({ itemprop: "name", title });
					break;
				case "description":
					this.setTag({ property: "og:" + key, content });
					this.setTag({ name: key, content });
					this.setTag({ itemprop: key, content });
					break;
				default:
					this.setTag({ property: key, content });
			}
		}
	}

	protected setTag(options: MetaDefinition) {
		this.metaService.addTag(options); // Retrieves or creates the tag with provided MetaDefinition
		this.metaService.updateTag(options); // Updates the tag with provided MetaDefinition
	}
}
