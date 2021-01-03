package com.sktudios.wanders;
import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;

public class UpActivity extends AppCompatActivity {
    private ImageButton t;
    private ImageButton ke;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        setContentView ( R.layout.activity_up );
        t = (ImageButton)findViewById(R.id.imageButton2);
        ke = (ImageButton)findViewById(R.id.imageButton3);
        t.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(UpActivity.this,TajActivity.class));
            }
        });
        ke.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(UpActivity.this,VaraActivity.class));
            }
        });
    }
}
