package com.sktudios.wanders;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;

public class SecondActivity extends AppCompatActivity {
    private ImageButton t;
    private ImageButton ke;
    private ImageButton kar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_second );
        t = (ImageButton)findViewById(R.id.imageButton2);
        ke = (ImageButton)findViewById(R.id.imageButton3);
        kar = (ImageButton)findViewById(R.id.imageButton4);
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(SecondActivity.this,DelhiActivity.class));
            }
        });
        ke.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(SecondActivity.this,AndActivity.class));
            }
        });
        kar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(SecondActivity.this,JamuActivity.class));
            }
        });
    }
}
