CKEDITOR.plugins.add('syndicated_content_ckeditor_plugin', {
	requires: 'widget',
	icons: 'syndicated_content_ckeditor_plugin',
	init: function(editor){
		CKEDITOR.dialog.add('syndicated_content_ckeditor_plugin', this.path + 'dialogs/syndicated_content_ckeditor_plugin.js');
		editor.widgets.add('syndicated_content_ckeditor_plugin', {
			allowedContent: true,
			requiredContent: 'div(syndicated-content)',
			editables: {
				title: {
					selector: '.syndicated-content',
					allowedContent: ''
				}
			},
			dialog: 'syndicated_content_ckeditor_plugin',
			upcast: function(element) {
				return element.name == 'div' && element.hasClass('syndicated-content');
			},
			template:
					'<div class="syndicated-content"></div>',
			init: function() {
				if (this.element.hasClass('simple')) {
					console.log( 'this: ' + this );
				}
			},
			data: function() {
				if (this.data.source) {
					this.element.setAttribute('data-syndicated-content-source', this.data.source);
				}
				if (this.data.courtesyMsg) {
					this.element.setAttribute('data-courtesy-msg', this.data.courtesyMsg);
				}
				if (this.data.contentId) {
					this.element.setAttribute('data-content-id', this.data.contentId);
					this.element.$.innerHTML = 'The syndicated content with id ' + this.data.contentId + ' have been added.';
				}
				if (this.data.stripStyles) {
					this.element.setAttribute('data-strip-styles', this.data.stripStyles);
				}
				if (this.data.stripScripts) {
					this.element.setAttribute('data-strip-scripts', this.data.stripScripts);
				}
				if (this.data.stripImages) {
					this.element.setAttribute('data-strip-images', this.data.stripImages);
				}
				if (this.data.stripBreaks) {
					this.element.setAttribute('data-strip-breaks', this.data.stripBreaks);
				}
				if (this.data.stripClasses) {
					this.element.setAttribute('data-strip-classes', this.data.stripClasses);
				}
			}
		});
		editor.ui.addButton('syndicated_content_ckeditor_plugin', {
			label : 'syndicated_content_ckeditor_plugin',
			command : 'syndicated_content_ckeditor_plugin',
			icons : CKEDITOR.getUrl(this.path + 'icons/syndicated_content_ckeditor_plugin.png')
		});
	}
});
