package com.sktudios.wanders;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;
public class OdActivity extends AppCompatActivity {
    private ImageButton c;
    private ImageButton ku;
    private  ImageButton t;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_od );
        c=(ImageButton)findViewById(R.id.imageButton2);
        ku=(ImageButton)findViewById(R.id.imageButton3);
        t=(ImageButton)findViewById(R.id.imageButton4);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(OdActivity.this,BhuActivity.class));
            }
        });
        ku.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(OdActivity.this,PuActivity.class));
            }
        });
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(OdActivity.this,SunActivity.class));
            }
        });
    }
}
