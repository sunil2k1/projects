package com.sktudios.wanders;
import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;
public class FirstActivity extends AppCompatActivity {
    private ImageButton t;
    private ImageButton ke;
    private ImageButton kar;
    private ImageButton ma;
    private ImageButton mp;
    private ImageButton od;
    private ImageButton ch;
    private ImageButton ra;
    private ImageButton ap;
    private ImageButton bi;
    private ImageButton go;
    private ImageButton up;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_first );
        t = (ImageButton)findViewById(R.id.imageButton3);
        ke = (ImageButton)findViewById(R.id.imageButton4);
        kar = (ImageButton)findViewById(R.id.imageButton5);
        ma= (ImageButton)findViewById(R.id.imageButton6);
        mp= (ImageButton)findViewById(R.id.imageButton9);
        od= (ImageButton)findViewById(R.id.imageButton10);
        ch= (ImageButton)findViewById(R.id.imageButton7);
        ra= (ImageButton)findViewById(R.id.imageButton11);
        ap= (ImageButton)findViewById(R.id.imageButton00);
        bi= (ImageButton)findViewById(R.id.imageButton21);
        go= (ImageButton)findViewById(R.id.imageButton1);
        up= (ImageButton)findViewById(R.id.imageButton12);
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,TNActivity.class));
            }
        });
        ke.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,KeActivity.class));
            }
        });
        kar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,KarActivity.class));
            }
        });
        ma.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,MaActivity.class));
            }
        });
        mp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,MpActivity.class));
            }
        });
        od.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,OdActivity.class));
            }
        });
        ch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,ChaActivity.class));
            }
        });
        ra.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,RajActivity.class));
            }
        });
        ap.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,APActivity.class));
            }
        });
        bi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,BActivity.class));
            }
        });
        go.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,GoaActivity.class));
            }
        });
        up.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FirstActivity.this,UpActivity.class));
            }
        });


    }
}
