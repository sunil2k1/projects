package com.sktudios.wanders;
import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;
import android.widget.Button;
public class FrontActivity extends AppCompatActivity {
    private ImageButton t;
    private ImageButton ke;
    private ImageButton kar;
    private ImageButton ma;
    private Button b;
    private Button ba;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_front );
        t = (ImageButton)findViewById(R.id.imageButton0);
        ke = (ImageButton)findViewById(R.id.imageButton1);
        kar = (ImageButton)findViewById(R.id.imageButton3);
        ma= (ImageButton)findViewById(R.id.imageButton4);
        b= (Button)findViewById(R.id.button);
        ba= (Button)findViewById(R.id.button1);
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FrontActivity.this,TNActivity.class));
            }
        });
        ke.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FrontActivity.this,MaActivity.class));
            }
        });
        kar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FrontActivity.this,AndActivity.class));
            }
        });
        ma.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FrontActivity.this,DelhiActivity.class));
            }
        });
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FrontActivity.this,FirstActivity.class));
            }
        });
        ba.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FrontActivity.this,SecondActivity.class));
            }
        });
    }
}
