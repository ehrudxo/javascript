package com.sds;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map.Entry;

public class Client {
	public static void main(String[] args) throws MalformedURLException, IOException {
		String url = "http://localhost:8000/";
		URLConnection connection = new URL(url).openConnection();
		InputStream response = connection.getInputStream();
		for (Entry<String, List<String>> header : connection.getHeaderFields().entrySet()) {
		    System.out.println(header.getKey() + "=" + header.getValue());
		}
		String contentType = connection.getHeaderField("Content-Type");
		String charset = null;

		for (String param : contentType.replace(" ", "").split(";")) {
		    if (param.startsWith("charset=")) {
		        charset = param.split("=", 2)[1];
		        break;
		    }
		}

		if (charset != null) {
		    try (BufferedReader reader = new BufferedReader(new InputStreamReader(response, charset))) {
		        for (String line; (line = reader.readLine()) != null;) {
		            System.out.println(line) ;
		        }
		    }
		}
		else {
		    // It's likely binary content, use InputStream/OutputStream.
		}
	}
}
