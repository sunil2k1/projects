package com.sktudios.bmical;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;

public class UnderActivity extends AppCompatActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_under);
            this.setRequestedOrientation( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
    }
}
