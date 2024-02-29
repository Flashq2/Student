<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    public function test_that_true_is_true(): void
    {
        $this->assertTrue("this is a string");
    }
}
