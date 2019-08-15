CKEDITOR.dialog.add('syndicated_content_ckeditor_plugin', function(editor) {
	return {
		title: 'Syndicated Content CKEditor Plugin',
		minWidth: 600,
		minHeight: 150,
		contents: [
			{
				id: 'info',
				elements: [
					{
						id: 'source',
						type: 'select',
						label: 'Syndicated Content Source',
						items: [
							[ 'HHS Syndication' ],
							[ 'CDC Syndication' ]
						],
						onLoad: function() {
							(function($) {
								$('.cke_dialog_ui_checkbox').hide();
								$('.cke_dialog_ui_input_select').change(function() {
									if ($(this).find('option:selected').text() == ' HHS Syndication') {
										$('.cke_dialog_ui_checkbox').fadeIn(800);
										$('.cke_dialog_ui_checkbox label').css({'display':'inline'});
									}
									if ($(this).find('option:selected').text() == ' CDC Syndication') {
										$('.cke_dialog_ui_checkbox').css({'display':'none'});
									}
								});
							})(jQuery);
						},
						setup: function(widget) {
							this.setValue(widget.data.source);
						},
						commit: function(widget) {
							widget.setData('source', this.getValue());
						},
					},
					{
            id: 'courtesyMsg',
            type: 'text',
            label: 'Content "Courtesy of" Message',
            'default': '',
            setup: function(widget) {
						},
						commit: function(widget) {
							widget.setData('courtesyMsg', this.getValue());
						}
          },
					{
            id: 'contentId',
            type: 'text',
            label: 'Syndicated Content Id',
            'default': '',
            setup: function(widget) {
						},
						commit: function(widget) {
							widget.setData('contentId', this.getValue());
						}
          },
					{
						id: 'stripStyles',
						type: 'checkbox',
						label: 'Strip Styles',
						items: [
							[ 'Strip Styles', '0' ]
						],
						setup: function(widget) {
							this.setValue(widget.data.stripStyles);
						},
						commit: function(widget) {
							widget.setData('stripStyles', this.getValue());
						},
					},
					{
						id: 'stripScripts',
						type: 'checkbox',
						label: 'Strip Scripts',
						items: [
							[ 'Strip Scripts', '0' ]
						],
						setup: function(widget) {
							this.setValue(widget.data.stripScripts);
						},
						commit: function(widget) {
							widget.setData('stripScripts', this.getValue());
						},
					},
					{
						id: 'stripImages',
						type: 'checkbox',
						label: 'Strip Images',
						items: [
							[ 'Strip Images', '0' ]
						],
						setup: function(widget) {
							this.setValue(widget.data.stripImages);
						},
						commit: function(widget) {
							widget.setData('stripImages', this.getValue());
						},
					},
					{
						id: 'stripBreaks',
						type: 'checkbox',
						label: 'Strip Breaks',
						items: [
							[ 'Strip Breaks', '0' ]
						],
						setup: function(widget) {
							this.setValue(widget.data.stripBreaks);
						},
						commit: function(widget) {
							widget.setData('stripBreaks', this.getValue());
						},
					},
					{
						id: 'stripClasses',
						type: 'checkbox',
						label: 'Strip Classes',
						items: [
							[ 'Strip Classes', '0' ]
						],
						setup: function(widget) {
							this.setValue(widget.data.stripClasses);
						},
						commit: function(widget) {
							widget.setData('stripClasses', this.getValue());
						},
					}
				]
			}
		]
	};
});
