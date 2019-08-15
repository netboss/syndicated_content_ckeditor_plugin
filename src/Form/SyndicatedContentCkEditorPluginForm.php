<?php

namespace Drupal\syndicated_content_ckeditor_plugin\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\Core\Entity\EntityFieldManagerInterface;

/**
 * Class SyndicatedContentCkEditorPluginForm.
 */
class SyndicatedContentCkEditorPluginForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'syndicated_content_ckeditor_plugin.baseurl',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'base_url_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('syndicated_content_ckeditor_plugin.baseurl');
    $form['json_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Syndicated Content URL'),
      '#description' => $this->t('Enter here the JSON data source URL in this format: "https://api.digitalmedia.hhs.gov/api/v2/resources/media/ID/syndicate.json" where "ID" is the article ID obtained after a search in this page: https://digitalmedia.hhs.gov/'),
      '#maxlength' => 128,
      '#size' => 64,
      '#default_value' => $config->get('json_url'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('syndicated_content_ckeditor_plugin.baseurl')
      ->set('json_url', $form_state->getValue('json_url'))
      ->save();
  
    $client = \Drupal::httpClient();
    $json_url = $this->config('syndicated_content_ckeditor_plugin.baseurl')->get('json_url');

    try {
      $response = $client->get($json_url, array('headers' => array('Accept' => 'text/plain')));
      $data = $response->getBody();

      if (empty($data)) {
        drupal_set_message('Empty response.');
      }
      else {
        return [
          '#theme' => 'syndicated_content_ckeditor_plugin',
          '#baseurl' => $json_url,
        ];
      }
    }
    catch (RequestException $e) {
      watchdog_exception('syndicated_content_ckeditor_plugin', $e);
    }
  }

}
