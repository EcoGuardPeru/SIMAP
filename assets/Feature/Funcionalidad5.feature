Feature: Cumplimiento Legal y Normativo
  Como startup legalmente responsable, quiero asegurar la transparencia y el cumplimiento
  con la Ley de Protección de Datos Personales del Perú.

  Scenario: 14 - Enlace a la Política de Protección de Datos
    Given el usuario está en el pie de página de la aplicación
    When el usuario hace clic en el enlace "Protección de Datos"
    Then el sistema debe abrir el documento que contiene la Ley N° 29733

  Scenario: 15 - Requisito de Consentimiento para Datos Sensibles
    Given un proceso de tratamiento de "datos sensibles" (ej. datos biométricos)
    When se solicita el consentimiento del titular
    Then el consentimiento debe efectuarse por escrito, además de ser previo, informado, expreso e inequívoco