package com.sktudios.wanders;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

public class TNActivity extends AppCompatActivity {
    private TextView tn;
    private ImageButton t;
    private ImageButton m;
    private ImageButton o;
    private ImageButton k;
    private ImageButton me;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        setContentView ( R.layout.activity_tn );
        tn= (TextView) findViewById(R.id.textView3);
        t = (ImageButton)findViewById(R.id.imageButton2);
        m = (ImageButton)findViewById(R.id.imageButton3);
        o = (ImageButton)findViewById(R.id.imageButton4 );
        k = (ImageButton)findViewById(R.id.imageButton5 );
        me = (ImageButton)findViewById(R.id.imageButton6 );
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(TNActivity.this,TNTActivity.class));
            }
        });
        m.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(TNActivity.this,TNMActivity.class));
            }
        });
        o.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(TNActivity.this,TNOActivity.class));
            }
        });
        k.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(TNActivity.this,TNKActivity.class));
            }
        });
        me.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(TNActivity.this,TNMEActivity.class));
            }
        });
    }
}
