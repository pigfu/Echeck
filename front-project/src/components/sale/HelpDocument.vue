<template>
    <div class="helpDocument">
        <h1>

            一. 什么是死锁？<br/>

            如果一个进程集合里面的每个进程都在等待这个集合中的其他一个进程（包括自身）才能继续往下执行，若无外力他们将无法推进，这种情况就是死锁，处于死锁状态的进程称为死锁进程<br/>

            二. 死锁产生的原因？<br/>

            1.因竞争资源发生死锁 现象：系统中供多个进程共享的资源的数目不足以满足全部进程的需要时，就会引起对诸资源的竞争而发生死锁现象<br/>

            （1）可剥夺资源和不可剥夺资源：可剥夺资源是指某进程在获得该类资源时，该资源同样可以被其他进程或系统剥夺，不可剥夺资源是指当系统把该类资源分配给某个进程时，不能强制收回，只能在该进程使用完成后自动释放<br/>

            （2）竞争不可剥夺资源：系统中不可剥夺资源的数目不足以满足诸进程运行的要求，则发生在运行进程中，不同的进程因争夺这些资源陷入僵局。<br/>

            举例说明：  资源A,B； 进程C,D<br/>

            资源A,B都是不可剥夺资源：一个进程申请了之后，不能强制收回，只能进程结束之后自动释放。内存就是可剥夺资源<br/>

            进程C申请了资源A，进程D申请了资源B。<br/>

            接下来C的操作用到资源B，D的资源用到资源A。但是C,D都得不到接下来的资源，那么就引发了死锁。<br/>

            （3）竞争临时资源<br/>

            2.进程推进顺序不当发生死锁<br/>



            三. 产生死锁的四个必要条件？<br/>

            （1）互斥条件：进程对所分配到的资源不允许其他进程进行访问，若其他进程访问该资源，只能等待，直至占有该资源的进程使用完成后释放该资源<br/>

            （2）请求和保持条件：进程获得一定的资源之后，又对其他资源发出请求，但是该资源可能被其他进程占有，此事请求阻塞，但又对自己获得的资源保持不放<br/>

            （3）不可剥夺条件：是指进程已获得的资源，在未完成使用之前，不可被剥夺，只能在使用完后自己释放<br/>

            （4）环路等待条件：是指进程发生死锁后，必然存在一个进程--资源之间的环形链<br/>



            四. 处理死锁的基本方法<br/>

            1.预防死锁：通过设置一些限制条件，去破坏产生死锁的必要条件<br/>

            2.避免死锁：在资源分配过程中，使用某种方法避免系统进入不安全的状态，从而避免发生死锁<br/>

            3.检测死锁：允许死锁的发生，但是通过系统的检测之后，采取一些措施，将死锁清除掉<br/>

            4.解除死锁：该方法与检测死锁配合使用<br/>

        </h1>
    </div>
</template>
<style>
    .helpDocument{
        text-align: left;
    }
</style>