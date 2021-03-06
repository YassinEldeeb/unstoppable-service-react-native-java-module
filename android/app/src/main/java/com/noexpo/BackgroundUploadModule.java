package com.noexpo;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

public class BackgroundUploadModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "BackgroundUpload";

    BackgroundUploadModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

  @ReactMethod
   public void sayHello(String name, Promise promise) {
      promise.resolve("Hello " + name);
   }
}