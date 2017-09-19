using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;
using Practical.Analytics;

namespace Practical
{
	public class PracticalConfig : MonoBehaviour
	{
		[Serializable]
		private struct configStruct
		{
			public string _enterprise;
			public string _apiKey;
			public string _customVersion;
			public string _customTag;
		}

		private bool enterprise = false;
		public string APIKey;
		public string customVersion;
		public string customTag;

		private PracticalDLL _practicalDLL;
		// Use this for initialization
		void Start()
		{
			var _configStruct = new configStruct()
			{
				_enterprise = enterprise.ToString().ToLower(),
				_apiKey = APIKey,
				_customVersion = customVersion,
				_customTag = customTag
			};

			var DllString = JsonUtility.ToJson(_configStruct);

			Debug.Log(DllString);

			_practicalDLL = GetComponent<PracticalDLL>();
			_practicalDLL.SetAPIKey(DllString);
		}

		void Awake()
		{
			DontDestroyOnLoad(transform.gameObject);
		}
	}
}