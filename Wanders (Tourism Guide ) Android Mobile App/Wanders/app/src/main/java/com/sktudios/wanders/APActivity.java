package com.sktudios.wanders;
import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;
public class APActivity extends AppCompatActivity {
    private ImageButton c;
    private ImageButton ku;
    private  ImageButton t;
    private ImageButton var;
    private  ImageButton kov;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        setContentView ( R.layout.activity_ap );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        c=(ImageButton)findViewById(R.id.imageButton2);
        ku=(ImageButton)findViewById(R.id.imageButton3);
        t=(ImageButton)findViewById(R.id.imageButton4);
        var=(ImageButton)findViewById(R.id.imageButton5);
        kov=(ImageButton)findViewById(R.id.imageButton6);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(APActivity.this,KadActivity.class));
            }
        });
        ku.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(APActivity.this,KakActivity.class));
            }
        });
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(APActivity.this,ThiActivity.class));
            }
        });
        var.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(APActivity.this,VajActivity.class));
            }
        });
        kov.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent( APActivity.this,VisActivity.class));
            }
        });
    }
}
