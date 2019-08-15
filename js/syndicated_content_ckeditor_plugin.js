(function($, Drupal, drupalSettings) {
	Drupal.behaviors.syndicatedContentCkEditorPlugin = {
		attach: function(context, settings) {
			$('.syndicated-content').css({'cursor':'pointer'});
			if (!$('body').hasClass('user-logged-in')) {
        var $syndicatedContent = $('.syndicated-content'),
        		baseUrl = drupalSettings.syndicated_content_ckeditor_plugin.baseurl,
        		contentSource = $syndicatedContent.attr('data-syndicated-content-source'),
        		contentId = $syndicatedContent.attr('data-content-id'),
        		courtesyMsg = $syndicatedContent.attr('data-courtesy-msg'),
        		stripStyles, stripScripts, stripImages, stripBreaks, stripClasses;
        if (typeof $syndicatedContent.attr('data-syndicated-content-source') !== 'undefined') {
        	contentSource = $syndicatedContent.attr('data-syndicated-content-source');
        }
        if (typeof $syndicatedContent.attr('data-strip-styles') !== 'undefined') {
        	stripStyles = $syndicatedContent.attr('data-strip-styles');
        }
        else {
        	stripStyles = $syndicatedContent.attr('data-strip-styles', 'false');
        }
        if (typeof $syndicatedContent.attr('data-strip-scripts') !== 'undefined') {
        	stripScripts = $syndicatedContent.attr('data-strip-scripts');
        }
        else {
        	stripScripts = $syndicatedContent.attr('data-strip-scripts', 'false');
        }
        if (typeof $syndicatedContent.attr('data-strip-images') !== 'undefined') {
        	stripImages = $syndicatedContent.attr('data-strip-images');
        }
        else {
        	stripImages = $syndicatedContent.attr('data-strip-images', 'false');
        }
        if (typeof $syndicatedContent.attr('data-strip-breaks') !== 'undefined') {
        	stripBreaks = $syndicatedContent.attr('data-strip-breaks');
        }
        else {
        	stripBreaks = $syndicatedContent.attr('data-strip-breaks', 'false');
        }
        if (typeof $syndicatedContent.attr('data-strip-classes') !== 'undefined') {
        	stripClasses = $syndicatedContent.attr('data-strip-classes');
        }
        else {
        	stripClasses = $syndicatedContent.attr('data-strip-classes', 'false');
        }
        // Source is HHS Syndication
        if (contentSource !== 'CDC Syndication') {
          if (typeof contentId !== 'undefined') {
            var webPoliciesCourtesy = '<div class="courtesy">Content courtesy of the National Institutes of Health</div>';
            $.getJSON('https://api.digitalmedia.hhs.gov/api/v2/resources/media/' + contentId + '/syndicate.json?stripStyles=' + stripStyles + '&stripScripts=' + stripScripts + '&stripBreaks=' + stripBreaks + '&stripImages=' + stripImages + '&stripClasses=' + stripClasses + '&displayMethod=null&autoplay=false&callback=?', function(data) {
              $('.syndicated-content').html((contentId == '2788') ? '<div class="syndicationWrapperWide left">' + webPoliciesCourtesy + data.results[0].content + '</div>' : '<div class="syndicationWrapperWide left">' + data.results[0].content + '</div>');
            });
          }
        }
        // Source is CDC Syndication
        else {
        	if (typeof contentId !== 'undefined') {
            $.getJSON('https://tools.cdc.gov/api/v2/resources/media/' + contentId, function(data) {
  	          $('.syndicated-content').html(data.results[0].embedCode);
  	        });
          }
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
