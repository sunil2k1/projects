package com.sktudios.wanders;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;

public class RajActivity extends AppCompatActivity {
    private ImageButton c;
    private ImageButton ku;
    private  ImageButton t;
    private ImageButton var;
    private  ImageButton kov;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_raj );
        c=(ImageButton)findViewById(R.id.imageButton2);
        ku=(ImageButton)findViewById(R.id.imageButton3);
        t=(ImageButton)findViewById(R.id.imageButton4);
        var=(ImageButton)findViewById(R.id.imageButton5);
        kov=(ImageButton)findViewById(R.id.imageButton6);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(RajActivity.this,JaiActivity.class));
            }
        });
        ku.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(RajActivity.this,JodActivity.class));
            }
        });
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(RajActivity.this,AbuActivity.class));
            }
        });
        var.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(RajActivity.this,RanActivity.class));
            }
        });
        kov.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent( RajActivity.this,UdaActivity.class));
            }
        });
    }
}
