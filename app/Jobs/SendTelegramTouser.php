<?php

namespace App\Jobs;

use App\MainSystem\system;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class SendTelegramTouser implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $system ;    
    public function __construct()
    {
        $this->system = new system();
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->system->telegram('Puthea is Smos','',21);
    }
}
