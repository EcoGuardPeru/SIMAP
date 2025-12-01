Feature: Investigación Avanzada y Análisis Ambiental (HU15)
  Como científico o estudiante, quiero acceder a modelos predictivos y datasets
  para realizar análisis y generar nueva información.

  Scenario: 11 - Inicio de Simulación de Escenario
    Given el usuario está en la subsección "Simulación y Entrenamiento"
    And ha seleccionado el escenario "Gran Deforestación Ilegal Súbita"
    When el usuario presiona "Iniciar Simulación"
    Then el sistema debe mostrar una nota indicando que se inyectarán alertas ficticias en el módulo de Monitoreo.

  Scenario: 12 - Ver Gráfico de Tendencia Ambiental
    Given el usuario está en la subsección "Análisis Estadístico"
    When el usuario visualiza el "Gráfico de Tendencia deforestación en Madre de Dios"
    Then el gráfico debe mostrar una línea de tendencia que decrece y luego aumenta en 2025
    And el área deforestada actual es de "925 ha" con un aumento del "+8%"

  Scenario: 13 - Solicitud de Descarga de Datos en Formato Específico
    Given el usuario está en la subsección "Análisis Ambiental"
    And el usuario selecciona "Imágenes Satelitales" como Tipo de Dataset
    When el usuario selecciona "GeoJSON" como Formato de Descarga
    Then el sistema debe preparar la descarga del dataset de imágenes satelitales en formato GeoJSON.