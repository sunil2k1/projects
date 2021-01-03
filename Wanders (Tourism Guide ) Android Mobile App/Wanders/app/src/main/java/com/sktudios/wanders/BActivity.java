package com.sktudios.wanders;
import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;
public class BActivity extends AppCompatActivity {
    private ImageButton c;
    private ImageButton ku;
    private  ImageButton t;
    private ImageButton var;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_b );
        c=(ImageButton)findViewById(R.id.imageButton3);
        ku=(ImageButton)findViewById(R.id.imageButton4);
        t=(ImageButton)findViewById(R.id.imageButton5);
        var=(ImageButton)findViewById(R.id.imageButton6);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(BActivity.this,BothActivity.class));
            }
        });
        ku.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(BActivity.this,NalActivity.class));
            }
        });
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(BActivity.this,PatActivity.class));
            }
        });
        var.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(BActivity.this,ValActivity.class));
            }
        });
    }
}
