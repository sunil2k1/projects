package com.sktudios.wanders;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;

public class MpActivity extends AppCompatActivity {
    private ImageButton c;
    private ImageButton ku;
    private  ImageButton t;
    private ImageButton var;
    private  ImageButton kov;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_mp );
        c=(ImageButton)findViewById(R.id.imageButton2);
        ku=(ImageButton)findViewById(R.id.imageButton3);
        t=(ImageButton)findViewById(R.id.imageButton4);
        var=(ImageButton)findViewById(R.id.imageButton5);
        kov=(ImageButton)findViewById(R.id.imageButton6);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MpActivity.this,BandhActivity.class));
            }
        });
        ku.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MpActivity.this,GwaActivity.class));
            }
        });
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MpActivity.this,PaActivity.class));
            }
        });
        var.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MpActivity.this,BheActivity.class));
            }
        });
        kov.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MpActivity.this,KhaActivity.class));
            }
        });

    }
}
