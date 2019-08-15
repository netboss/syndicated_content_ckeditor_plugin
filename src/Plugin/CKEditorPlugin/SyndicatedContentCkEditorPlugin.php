<?php

namespace Drupal\syndicated_content_ckeditor_plugin\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginInterface;
use Drupal\ckeditor\CKEditorPluginButtonsInterface;
use Drupal\Component\Plugin\PluginBase;
use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\Annotation\CKEditorPlugin;
use Drupal\Core\Annotation\Translation;

/**
 * Defines the "Business Card" plugin.
 *
 * @CKEditorPlugin(
 *   id = "syndicated_content_ckeditor_plugin",
 *   label = @Translation("Syndicated Content CKEditor Plugin"),
 *   module = "syndicated_content_ckeditor_plugin"
 * )
 */
class SyndicatedContentCkEditorPlugin extends PluginBase implements CKEditorPluginInterface, CKEditorPluginButtonsInterface {
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getDependencies().
   */
  function getDependencies(Editor $editor) {
    return array();
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getLibraries().
   */
  function getLibraries(Editor $editor) {
    return array();
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::isInternal().
   */
  function isInternal() {
    return FALSE;
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  function getFile() {
    return drupal_get_path('module', 'syndicated_content_ckeditor_plugin') . '/js/plugins/syndicated_content_ckeditor_plugin/plugin.js';
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginButtonsInterface::getButtons().
   */
  function getButtons() {
    return array(
      'syndicated_content_ckeditor_plugin' => array(
        'label' => t('Syndicated Content Box'),
        'image' => drupal_get_path('module', 'syndicated_content_ckeditor_plugin') . '/js/plugins/syndicated_content_ckeditor_plugin/icons/syndicated_content_ckeditor_plugin.png',
      )
    );
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getConfig().
   */
  public function getConfig(Editor $editor) {
    return array();
  }
}
