var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso-a-la-propiedad-",
      "name": "INGRESO A LA PROPIEDAD ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3447774469386644,
        "pitch": 0.15965577732711544,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.09918237637588767,
          "pitch": 0.09243801349862935,
          "rotation": 0,
          "target": "1-garage"
        },
        {
          "yaw": -1.0842690422657864,
          "pitch": 0.08841686872108845,
          "rotation": 0,
          "target": "2-jardin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garage",
      "name": "GARAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0669725111493333,
          "pitch": 0.13985655811747932,
          "rotation": 0,
          "target": "0-ingreso-a-la-propiedad-"
        },
        {
          "yaw": -0.7697330635123993,
          "pitch": 0.08610014126950283,
          "rotation": 0,
          "target": "3-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-jardin",
      "name": "JARDIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.39964142017927884,
        "pitch": 0.08973698317629086,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.7056320350811625,
          "pitch": 0.0918255211723995,
          "rotation": 0,
          "target": "0-ingreso-a-la-propiedad-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-patio",
      "name": "PATIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.0017809482163215762,
        "pitch": 0.04815015506691722,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.7439109322330566,
          "pitch": 0.12089452419370517,
          "rotation": 0,
          "target": "1-garage"
        },
        {
          "yaw": 0.800405082201479,
          "pitch": 0.05481034214719216,
          "rotation": 0,
          "target": "10-pasillo-de-distribucion"
        },
        {
          "yaw": -1.251888139625942,
          "pitch": 0.07013500598141675,
          "rotation": 0,
          "target": "9-parrilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.673211045867145,
        "pitch": 0.35736048523202335,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.8910542979723317,
          "pitch": 0.02272133802039278,
          "rotation": 0,
          "target": "8-ingreso-a-bao-y-cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.049814409743396126,
        "pitch": 0.053119667644253354,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.0749569604631475,
          "pitch": 0.07328889441479447,
          "rotation": 0,
          "target": "8-ingreso-a-bao-y-cuarto"
        },
        {
          "yaw": -3.114896003372996,
          "pitch": 0.12851074423280728,
          "rotation": 0,
          "target": "10-pasillo-de-distribucion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cuarto-ii",
      "name": "CUARTO II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.060536103193644664,
        "pitch": 0.24833047028014477,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.7007270063504905,
          "pitch": 0.1185601856480325,
          "rotation": 0,
          "target": "8-ingreso-a-bao-y-cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacion",
      "name": "HABITACION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.35419003630497414,
        "pitch": 0.15586437036762035,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.984527349494398,
          "pitch": 0.025665541021790972,
          "rotation": 0,
          "target": "10-pasillo-de-distribucion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ingreso-a-bao-y-cuarto",
      "name": "INGRESO A BAÑO Y CUARTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3086094882050734,
          "pitch": -0.025474762507300852,
          "rotation": 0,
          "target": "4-bao"
        },
        {
          "yaw": -0.329032323968363,
          "pitch": -0.1479442380126379,
          "rotation": 0,
          "target": "6-cuarto-ii"
        },
        {
          "yaw": 2.925771289595362,
          "pitch": 0.013042487048394946,
          "rotation": 0,
          "target": "5-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-parrilla",
      "name": "PARRILLA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.24755180206858363,
        "pitch": 0.05828702981783351,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.119194943994952,
          "pitch": 0.1096910109930036,
          "rotation": 0,
          "target": "3-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pasillo-de-distribucion",
      "name": "PASILLO DE DISTRIBUCION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.841003067481248,
          "pitch": 0.13134081064915648,
          "rotation": 0,
          "target": "3-patio"
        },
        {
          "yaw": -0.8631401066891442,
          "pitch": 0.05980069471842242,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": 1.7197902573944859,
          "pitch": 0.06269457923584554,
          "rotation": 0,
          "target": "7-habitacion"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CAPDEVILATOUR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
