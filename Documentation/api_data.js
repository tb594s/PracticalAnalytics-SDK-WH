define({ "api": [
  {
    "type": "C# - Class",
    "url": "PracticalAPI",
    "title": "Overview",
    "group": "Basics",
    "description": "<p>PracticalAPI contains methods that enable you to track/record events in your application. A helper script is available for gaze input.</p>",
    "parameter": {
      "fields": {
        "Methods": [
          {
            "group": "Methods",
            "type": "Gaze",
            "optional": false,
            "field": "RecordGazeOn",
            "description": "<p>Tracks what objects are being gazed on.</p>"
          },
          {
            "group": "Methods",
            "type": "Gaze",
            "optional": false,
            "field": "RecordGazeOff",
            "description": "<p>Ends object tracking and reports seconds gazed.</p>"
          },
          {
            "group": "Methods",
            "type": "Gesture",
            "optional": false,
            "field": "RecordGesture",
            "description": "<p>Records when gestures are being used.</p>"
          },
          {
            "group": "Methods",
            "type": "Gesture",
            "optional": false,
            "field": "RecordHoldStarted",
            "description": "<p>Records when hold gesture starts.</p>"
          },
          {
            "group": "Methods",
            "type": "Gesture",
            "optional": false,
            "field": "RecordHoldCompleted",
            "description": "<p>Records when hold gesture completes and reports seconds held.</p>"
          },
          {
            "group": "Methods",
            "type": "Mapping",
            "optional": false,
            "field": "IncludeMapping",
            "description": "<p>Adds gaze tracking to mapped objects.</p>"
          },
          {
            "group": "Methods",
            "type": "Keyword",
            "optional": false,
            "field": "RecordKeyword",
            "description": "<p>Records what keywords are being said.</p>"
          },
          {
            "group": "Methods",
            "type": "Gain",
            "optional": false,
            "field": "RecordGain",
            "description": "<p>Records when user experiences a gain in application.</p>"
          },
          {
            "group": "Methods",
            "type": "Loss",
            "optional": false,
            "field": "RecordLoss",
            "description": "<p>Records when user experiences a loss in application.</p>"
          },
          {
            "group": "Methods",
            "type": "CustomStat",
            "optional": false,
            "field": "RecordCustomStat",
            "description": "<p>Records a customized metric/stat.</p>"
          },
          {
            "group": "Methods",
            "type": "GetErrorMessage",
            "optional": false,
            "field": "GetErrorMessage",
            "description": "<p>Returns specific error message.</p>"
          },
          {
            "group": "Methods",
            "type": "GetLastErrorMessage",
            "optional": false,
            "field": "GetLastErrorMessage",
            "description": "<p>Returns last error message.</p>"
          }
        ],
        "Enums": [
          {
            "group": "Enums",
            "type": "Formula",
            "optional": false,
            "field": "Formula",
            "description": "<p>Identifies if user is requesting count or average data analytics.</p>"
          },
          {
            "group": "Enums",
            "type": "Measurment",
            "optional": false,
            "field": "Measurment",
            "description": "<p>Identifies how measurment will be taken.</p>"
          },
          {
            "group": "Enums",
            "type": "GestureType",
            "optional": false,
            "field": "GestureType",
            "description": "<p>Identifies what type of gesture is being used.</p>"
          }
        ],
        "Helpers": [
          {
            "group": "Helpers",
            "type": "Script",
            "optional": false,
            "field": "PracticalGazeTracker",
            "description": "<p>Provides a custom identifier that group GameObject stats together.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "Basics",
    "name": "C____classPracticalapi"
  },
  {
    "type": "beta release",
    "url": "Info",
    "title": "Info",
    "name": "Info",
    "examples": [
      {
        "title": "Getting Started:",
        "content": "Repository:\nhttps://github.com/PracticalVR/PracticalAnalytics-SDK-WH\n\nImport the PracticalAnayltics package and drag the PracticalManager prefab into your scene.\n\nAccess the API Key from the \"My Apps\" section of http://analytics.practicalvr.com\n\nYou can enable Log Summary in the inspector to see data being collected in the debug log.\n\nGive feedback in the inspector when PracticalManager is selected.\n\nTo set up Dll, locate the plugins folder. \nInside the folder will be the DLL.\nIn inspector, set only WSAPlayer.\nMake sure CPU is set to X86.\nClick Apply.\n\nA clean build is required when implementing DLL.\nYou must delete the content in your build folder when doing the initial build with DLL.\n\nYou must gather a minimum of 10 stats before session data is accepted. \n\nCapabilities in Unity must include InternetClient and PicturesLibrary for platform integration.",
        "type": "json"
      }
    ],
    "group": "Basics",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "Basics"
  },
  {
    "type": "C# - Enum",
    "url": "Formula",
    "title": "Formula",
    "name": "Formula",
    "description": "<p>Formula identifies if user is requesting total or average data analytics.</p>",
    "parameter": {
      "fields": {
        "DataField": [
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Total",
            "description": "<p>Adds 1 (default).</p>"
          },
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Average",
            "description": "<p>Finds Average.</p>"
          }
        ]
      }
    },
    "group": "Enums",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "Enums"
  },
  {
    "type": "C# - Enum",
    "url": "GestureType",
    "title": "GestureType",
    "name": "GestureType",
    "description": "<p>GestureType identifies if user is requesting total or average data analytics.</p>",
    "parameter": {
      "fields": {
        "DataField": [
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Tap",
            "description": "<p>Identifies as a tap gesture.</p>"
          },
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Hold",
            "description": "<p>Identifies as a hold gesture.</p>"
          }
        ]
      }
    },
    "group": "Enums",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "Enums"
  },
  {
    "type": "C# - Enum",
    "url": "Measurement",
    "title": "Measurement",
    "name": "Measurement",
    "description": "<p>Measurement identifies how measurment will be taken.</p>",
    "parameter": {
      "fields": {
        "DataField": [
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Count",
            "description": "<p>Measures by adding 1 (default).</p>"
          },
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Second",
            "description": "<p>Measures in seconds.</p>"
          },
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Feet",
            "description": "<p>Measures in feet.</p>"
          },
          {
            "group": "DataField",
            "type": "int",
            "optional": false,
            "field": "Meter",
            "description": "<p>Measures in meters.</p>"
          }
        ]
      }
    },
    "group": "Enums",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "Enums"
  },
  {
    "type": "C# - Class",
    "url": "PracticalGazeTracker.cs",
    "title": "PracticalGazeTracker.cs",
    "name": "PracticalGazeTracker_cs",
    "description": "<p>PracticalGazeTracker.cs provides a field for a custom identifier that groups GameObject stats together when they share the same identifier.</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "If you want to group multiple GameObject stats together, \nyou can drag this script onto those objects and give them an identical custom name.\nThe custom name will show in the portal with the collected stats from that group. \n\nSee IncludeMapping() to add mapping to gaze tracking.",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Variables": [
          {
            "group": "Variables",
            "type": "bool",
            "optional": false,
            "field": "customName",
            "description": "<p>Triggers use of a seperate custom GameObject name.</p>"
          },
          {
            "group": "Variables",
            "type": "string",
            "optional": false,
            "field": "customIdentifier",
            "description": "<p>Assigns a custom GameObject name.</p>"
          }
        ]
      }
    },
    "group": "Helpers",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "Helpers"
  },
  {
    "type": "C# - Method",
    "url": "GetErrorMessage()",
    "title": "GetErrorMessage()",
    "name": "GetErrorMessage__",
    "description": "<p>GetErrorMessage() returns specific error message.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "int",
            "optional": false,
            "field": "errorCode",
            "description": "<p>References specific error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "GetErrorMessage(int errorCode);",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "GetErrorMessage(1);",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "GetLastErrorMessage()",
    "title": "GetLastErrorMessage()",
    "name": "GetLastErrorMessage__",
    "description": "<p>GetLastErrorMessage() returns last error message.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Example:",
          "content": "GetLastErrorMessage();",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "IncludeMapping()",
    "title": "IncludeMapping()",
    "name": "IncludeMapping__",
    "description": "<p>IncludeMapping() will add gaze tracking to mapped objects.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.IncludeMapping();",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordCustomStat()",
    "title": "RecordCustomStat()",
    "name": "RecordCustomStat__",
    "description": "<p>RecordCustomStat() records a custom metric/stat. Custom stats can be used in variety of ways.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "uniqueIdentifier",
            "description": "<p>References identification of customized metric/stat.</p>"
          },
          {
            "group": "Parameters",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>References value of customized metric/stat.</p>"
          },
          {
            "group": "Parameters",
            "type": "Measurment",
            "optional": false,
            "field": "measurement",
            "description": "<p>References measurement of customized metric/stat. Count, Second, Feet, or Meter. (optional)</p>"
          },
          {
            "group": "Parameters",
            "type": "Formula",
            "optional": false,
            "field": "formula",
            "description": "<p>References formula of customized metric/stat. Total or Average. (optional)</p>"
          },
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "gazedObject",
            "description": "<p>References the GameObject being gazed while stat is being recorded. (AutoGenerated)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordCustomStat(string uniqueIdentifier, float value);\nPracticalAPI.Instance.RecordCustomStat(string uniqueIdentifier, float value, Measurement measurement, Formula formula);",
          "type": "json"
        },
        {
          "title": "Examples:",
          "content": "PracticalAPI.Instance.RecordCustomStat(\"WavesCompleted\", 1);\nPracticalAPI.Instance.RecordCustomStat(\"Combo\", 1, Measurement.Count, Formula.Total);\nPracticalAPI.Instance.RecordCustomStat(\"SecondsLeft\", 32, Measurement.Count, Formula.Average);",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordGain()",
    "title": "RecordGain()",
    "name": "RecordGain__",
    "description": "<p>RecordGain() records when user gains resources.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "uniqueIdentifier",
            "description": "<p>Reference identification of stat.</p>"
          },
          {
            "group": "Parameters",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>References the stat value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordGain(string uniqueIdentifier, float value);",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordGain(\"HealthGained\", 25);",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordGazeOff()",
    "title": "RecordGazeOff()",
    "name": "RecordGazeOff__",
    "description": "<p>RecordGazeOff() ends object tracking and reports seconds gazed.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordGazeOff();\n\nSee \"PracticalGazeTracker.cs\" for additional gaze tracking implementations.",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordGazeOff();",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordGazeOn()",
    "title": "RecordGazeOn()",
    "name": "RecordGazeOn__",
    "description": "<p>RecordGazeOn() tracks what objects are being gazed on.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "gazedObject",
            "description": "<p>Records the object name that is being gazed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordGazeOn(string gazedObject);\n\nSee \"PracticalGazeTracker.cs\" for additional gaze tracking implementations.",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordGazeOn(Target.name);",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordGesture()",
    "title": "RecordGesture()",
    "name": "RecordGesture__",
    "description": "<p>RecordGesture() records what gestures are being used. GestureType defaults to Tap.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "uniqueIdentifier",
            "description": "<p>Records name of object being gesture to. (Example: HitObject.gameObject.name)</p>"
          },
          {
            "group": "Parameters",
            "type": "GestureType",
            "optional": false,
            "field": "gestureType",
            "description": "<p>Identifies which type of gesture is being used.</p>"
          },
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "gazedObject",
            "description": "<p>Reference the GameObject being gazed while stat is being recorded. (AutoGenerated)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordGesture(string uniqueIdentifier);",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "protected void OnTappedEvent(InteractionSourceKing source, int tapCount, Ray headRay)\n{\n  \"Get the current Gaze's hit object\"\n  var hitObj = GazeManager.Instance.HitObject;\n\t\t\n  \"Send an OnSelect message to the focused object and it's ancestors.\"\n  if (hitObj != null)\n  {\n     if(hitObj.layer == 11)\n     {\n        PracticalAPI.Instance.RecordGesture(\"Mapping\");\n     }\n     else\n     {\n        PracticalAPI.Instance.RecordGesture(hitObj.gameObject.name);\n     }\n  }\n  else\n  {\n     PracticalAPI.Instance.RecordGesture(\"No Hit\");\n  }\n}",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordHoldComplete()",
    "title": "RecordHoldComplete()",
    "name": "RecordHoldComplete__",
    "description": "<p>RecordHoldComplete() reports seconds spent holding.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "uniqueIdentifier",
            "description": "<p>Records gesture event name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordHoldComplete(string uniqueIdentifier);",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordHoldComplete(\"Charged laser\");",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordHoldStarted()",
    "title": "RecordHoldStarted()",
    "name": "RecordHoldStarted__",
    "description": "<p>RecordHoldStarted() starts on hold tracking.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordHoldStarted();",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordHoldStarted();",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordKeyword()",
    "title": "RecordKeyword()",
    "name": "RecordKeyword__",
    "description": "<p>RecordKeyword() records what keywords are being used.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "keyword",
            "description": "<p>Records keyword use in application.</p>"
          },
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "gazedObject",
            "description": "<p>References the GameObject being gazed while stat is being recorded. (AutoGenerated)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordKeyword(string keyword);",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordKeyword(“Combo”);",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  },
  {
    "type": "C# - Method",
    "url": "RecordLoss()",
    "title": "RecordLoss()",
    "name": "RecordLoss__",
    "description": "<p>RecordLoss() records when user looses resources.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "string",
            "optional": false,
            "field": "uniqueIdentifier",
            "description": "<p>Reference identification of stat.</p>"
          },
          {
            "group": "Parameters",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>Referencese the stat value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Structure:",
          "content": "PracticalAPI.Instance.RecordLoss(string uniqueIdentifier, float value)",
          "type": "json"
        },
        {
          "title": "Example:",
          "content": "PracticalAPI.Instance.RecordLoss(\"StageFailed\", 1);",
          "type": "json"
        }
      ]
    },
    "group": "PracticalAPI",
    "permission": [
      {
        "name": "Beta"
      }
    ],
    "version": "0.1.0",
    "filename": "./PracticalAPI.cs",
    "groupTitle": "PracticalAPI"
  }
] });