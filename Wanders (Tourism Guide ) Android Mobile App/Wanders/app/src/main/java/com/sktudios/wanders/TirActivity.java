package com.sktudios.wanders;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;

public class TirActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        setContentView ( R.layout.activity_tir );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
    }
}
